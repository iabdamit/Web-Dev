// spread
const nums=[1,23,45,7,9,78,765];
const a=Math.max(nums); //gives NaN
const b=Math.max(...nums);// gives 765

const cats=['Blue','Scout','Rocket'];
const dogs=['Rusty','Wyatt'];
//spread makes copy so if we change in allPets does not take place in cats and dogs
const allPets=[...cats, ...dogs];

//obejcts with spread
const feline={legs:4,family:'Felidae'};
const canine={isFurry:true,family:'caninae'};
const catDog={...feline , ...canine};//{legs: 4, family: 'caninae', isFurry: true}
const dogCat={...canine,...feline};//{isFurry: true, family: 'Felidae', legs: 4}

// data 
const dataFromForm={
    email:'blueman@gmail.com',
    password:'dgju1236',
    username:'mr.kaliki'
}
const newUser={...dataFromForm,id:2345,isAdmin:false};