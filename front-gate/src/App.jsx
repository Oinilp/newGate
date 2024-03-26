import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TaskPage} from './pages/TaskPage'
import {TaskFormPageCopy} from './pages/TaskFormPage copy'
import Navigation from './components/Navigation'
import { useGetAllTask } from './hooks/useGetAllTask' 
import { Grid, Flex, Box, Center } from '@chakra-ui/react'
import { UserInfo } from './components/userInfo'
import { UserConfig } from './pages/UserConfig'
import {Home} from './pages/Home.jsx'
import { useAuth0 } from "@auth0/auth0-react";



function App() {


  const { user, isAuthenticated, isLoading } = useAuth0();

  const {tasks} = useGetAllTask()
  let tasksT =[]
  let tasksF = []
  for (const taskFiltred of tasks) {
    
    if(taskFiltred.done == true){
      tasksT.push(taskFiltred)
    }else{
      tasksF.push(taskFiltred)
    }

  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  
  return (
    <BrowserRouter>
      <Flex alignContent={'center'} justifyContent={isAuthenticated==true ? 'space-between':'center'} gap={5}>
        {isAuthenticated && <Navigation />}
        <Box>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/tasks" element={<TaskPage tasq={tasksF} />} />
            <Route path="/tasksT" element={<TaskPage tasq={tasksT} />} />
            <Route path="/tasks-create" element={<TaskFormPageCopy />} />
            <Route path="/tasks/:id" element={<TaskFormPageCopy />} />
            <Route path="/user-config" element={<UserConfig />} />
          </Routes>
        </Box>
        {isAuthenticated && <UserInfo />}
      </Flex>
    </BrowserRouter>
  );
    
}

export default App

