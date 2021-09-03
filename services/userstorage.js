import AsyncStorage from '@react-native-community/async-storage';

let users =[
    {id:1,name:"admin",password:"admin"},
  ]; //default values

export const getUsers = async() =>{
    let userList = await AsyncStorage.getItem('users');
    if (userList == null || userList =="null"){
        users =[];
        return [];
    }else{
        users =JSON.parse(userList);
        return users;
    }
}

const updateUsers = async() =>{
    await AsyncStorage.setItem('users', JSON.stringify(users));
}
export const addUser = async(user) =>{
    user.id = Math.random()*(1000+20)-3;
    users.push(user);
    await updateUsers();
}






/* export const getCustomers = async ()=>{
    let customerList = await AsyncStorage.getItem('customers');
    if(customerList == null || customerList == "null" ){
        customers = [];
        return [];
    }else{
        customers = JSON.parse(customerList);
        return customers;
    }
}
const updateAsyncData = async ()=>{
    await AsyncStorage.setItem('customers',JSON.stringify(customers));
}

export const addCustomer = async(customer)=>{
    customer.id = Date.now()+'r';
    customers.push(customer);
    await updateAsyncData();
}

export var deleteCustomer = async (id) =>{
    customers = customers.filter((item)=>(item.id!=id));
    await updateAsyncData();
  }

export const getCustomerById = (id) =>{
    var list = customers.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export const updateCustomer = async (customer) =>{
    var list = customers.filter((item)=>(item.id==customer.id));
    if(list.length > 0){
         list[0].name = customer.name;
         list[0].email = customer.email;
         list[0].phone = customer.phone;
         list[0].address = customer.address;
    }
    await updateAsyncData();
} */