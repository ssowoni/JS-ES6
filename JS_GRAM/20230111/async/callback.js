//callback 함수는 


console.log('1');
setTimeout(() =>{
    console.log('2');
},1000);

/* setTimeout(function(){
    console.log('2');
},1000); */
console.log('3');


//synchronous callback 
//함수의 선언은 hosting이 되어 맨 처음 호출된다. 
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello'));


//asynchronous callback
function printWithDely(print, timeout){
    setTimeout(print,timeout);
}

printWithDely(()=> console.log('async callback'),2000);



//callback hell example

class UserStorage{
    loginUser(id, password, onSuccess, onError){
         setTimeout(()=> {
            if((id=='ellie' && password == 'dream') ||
            (id=='coder' && password == 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not fount'));
            }
         },2000);   
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user=='ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));

            }
        },1000);
    }
}


const UserStorage = new UserStorage();
const id =prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(id,password,
    user =>{
        UserStorage.getRoles(
            user,
            userWithRole =>{
                alert('hi ${userWithRole.name}, your have a ${userWithRole.role} role');
            },
            error =>{
                console.log(error);
            }
        );
    },
    error =>{
        console.log(error);
    }
    )