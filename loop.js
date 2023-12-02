        // for (let a=0; a<=10; a+=3){
        //     console.log(a, "shahsawar")
        // }

        // for (let a=0; a<=10; a++){
        //     console.log(a, "shahsawar")
        // }

        // for (let a=0; a<=10; a=a+3){
        //     console.log(a, "shahsawar")
        // }


        // let friends = ['hassan','shahsawar','ahad','hammad','rahan','ali','Asad','Asif']
        // console.log(`Hello Dear Friend Mr. ${friends[0]}
        // you are invited at the party today.`)
        // console.log(`Hello Dear Friend Mr. ${friends[1]}
        // you are invited at the party today.`)
        // console.log(`Hello Dear Friend Mr. ${friends[2]}
        // you are invited at the party today.`)
        // console.log(`Hello Dear Friend Mr. ${friends[3]}
        // you are invited at the party today.`)
        // console.log(`Hello Dear Friend Mr. ${friends[4]}
        // you are invited at the party today.`)
        // console.log(`Hello Dear Friend Mr. ${friends[5]}
        // you are invited at the party today.`)

        // for (a=0; a<friends.length; a++){
        // console.log(`Hello Dear Friend Mr. ${friends[a]}
        // you are invited at the party today.`)}


        // for (a=0; a<friends.length; a++){
        //     if(friends[a][0]=="a"){
        //     console.log(`Hello Dear Friend Mr. ${friends[a]}
        //     you are invited at the party today.`)
        // }
        // }

        // for (a=0; a<friends.length; a++){
        //     if(friends[a].startsWith("a")){
        //     console.log(`Hello Dear Friend Mr. ${friends[a]}
        //     you are invited at the party today.`)
        // }
        // }

        // for (a=0; a<friends.length; a++){
        //     if(friends[a].endsWith("d")){
        //     console.log(`Hello Dear Friend Mr. ${friends[a]}
        //     you are invited at the party today.`)
        // }
        // }

        // for (a=0; a<friends.length; a++){
        //     if(friends[a].startsWith("a") || friends[a].startsWith("A")){
        //     console.log(`Hello Dear Friend Mr. ${friends[a]}
        //     you are invited at the party today.`)
        // }
        // }
        //################# Task #################
        // take input 10 usernames from prompt and add every user name in the array.
        // also check if user name has already taken gemerate a msg or alert that username not avialbe
        // let usernames =  []
        // for (a=0; a<5; a++){
        //     let username = prompt("please enter username")
        //     usernames.push(username)
        // }
        // console.log(usernames)

        // wrong
        // let sum=0
        // var let number = parseInt(prompt("Enter a number"))
        // while(number>0)
        // {
        
        //     {
        //         sum+=Number(number)
        //     } 
        //     else{
        //         break
        //     }
           
        // }
        // alert(sum)
        //wrong
        
        // let table_num = parseInt(prompt("Enter table number"))
        // for (let a=1; a<=10; a++)
        // console.log(`${table_num} * ${a} = ${table_num*a}`)

        let tables = Number(prompt("enter howmany tables"))
                      //outer loop
        for (let a=2; a<=tables; a++){
                   //inner loop
            for (c=1;c<=10;c++){
            console.log(`${a} * ${c} =${a*c}`)
        }
    }


