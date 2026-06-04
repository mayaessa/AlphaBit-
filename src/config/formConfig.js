const formConfig = [
    {
        type:"text",
        name:"fullName",
        label:"Full Name",
        required:true
    },
    {
        type:"email",
        name:"email",
        label:"Email",
        required:true
    },
    {
        type:"password",
        name:"password",
        label:"Password",
        required:true
    },
    {
        type :"select",
        name:"country",
        label:"Country",
        options:["Syria","Jordan","Egypt","Lebanon"],
        required:true

    },
    {
        type :"checkbox",
        name:"Languages",
        label:"Languages",
        options:["Arabic","English","French"],
        required:true

    },
    {
        type :"radio",
        name:"gender",
        label:"Gender",
        options:["Male","Female"],
        required:true

    }

];
export default formConfig;