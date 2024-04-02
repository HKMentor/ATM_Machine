#!/usr/bin/env node
import inquirer from "inquirer";

let totalBalance:number = 25000; //Dollar
const pinNumber:number = 7272;


let pinAnswer =await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number"
        }
    ]
);
if(pinAnswer.pin ===pinNumber){
    console.log("Correct pin code!!")


    let atmQuestion = await inquirer.prompt(
        [
            {
                name:'accountType',
                messsage:'Select your account type',
                type:'list',
                choices:[
                    "Current Account",
                    "Saving Account",
                ]
            },
            {
                name:'transMethod',
                messsage:'Select your transaction method',
                type:'list',
                choices:[
                    "Cash Withdrawal",
                    "Fast Cash"
                ]
            }
        ]
    );

if(atmQuestion.transMethod == "Cash Withdrawal")
{
    let cashwithdrawAccount =await inquirer.prompt([
        {
            name:'withdrawal',
            message:'Enter the amount you want to withdraw',
            type:'number',
        
        }
    ]);
    //greater than or equal to operator
    if(totalBalance >= cashwithdrawAccount.withdrawal)
    {
        totalBalance -= cashwithdrawAccount.withdrawal //totalBalance  = totalBalance - cashwithdrawal
        console.log(`Your Total Balance is :${totalBalance}`)
    }
    else{
        console.log('Insufficient Balance')
    }
}
    else {
        let fastCashAmount =await inquirer.prompt(
            [
                {
                    name:'fastCash',
                    message:'Select the amount you want to withdraw ',
                    type:'list',
                    choices:[
                        "2000",
                        "5000",
                        "10000",
                        "15000",
                    ]
                }
            ]
        )
        if(totalBalance >= fastCashAmount.fastCash){
            totalBalance-= fastCashAmount.fastCash // totalbalance = totalBalance -cashwithdrawal
            console.log(`Your Total Balance is :${totalBalance}`)
        }
        else{
            console.log('Insufficient Balance')
        }
    }
}
else{
    console.log("Incorrect Pin")
}