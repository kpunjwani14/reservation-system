import React, {useEffect,useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';
import { HomeNavbar } from '../Pages/Components/HomeNavbar';
import { ReserveTable } from '../Pages/ReserveTable';
import App from '../App';
import axios from 'axios'
import Cookies from 'js-cookie'

export const Routes = () => {
    const [auth, setAuth] = useState(false);
    const [isLoading,setLoading] = useState(true)
    useEffect( () => {
        async function getData(){
        try{
            await axios.get('http://localhost:3001/auth',{headers: {Authorization: 'Bearer '+Cookies.get('access_token')}})
            console.log('this is done')
            setAuth(true)
        }
        catch(err){
            console.log(err)
            setAuth(false)
        }
        finally{
            setLoading(false)
        }
    }
         getData()
        
      }, []);
    return (
        !isLoading && 
            <div>
            <HomeNavbar auth={auth} setAuth={setAuth} />
            <br />
            <Switch>
                <Route exact path='/' render={(props)=>(<Homepage />)} />
                <Route path='/reservation' component={ReserveTable} />
            </Switch>
        </div>

    );
}