var count = 1;
function change(change){

  if(change=="next"){
    if(count<=6){
      count++;
    }
  }

  if(change=="prev"){
    if(count>=1){
      count--;
    }
  }
  
  const title = document.getElementById('title');
  const framework = document.getElementById('framework');
  const appdetails = document.getElementById('app-details');
  const extra = document.getElementById('extra');
  title.style.opacity = 0; 
  framework.style.opacity = 0; 
  appdetails.style.opacity = 0; 
  extra.style.opacity = 0; 

  if(count==1){
    setTimeout(() => {
        title.innerHTML = 'Application name: <b>Doxwipe</b> (admin)';
        framework.innerHTML = 'Developed using Flutter';
        appdetails.innerHTML = 'Application to remove requested image in social media and gallery by admin which is given by user.';
        extra.innerHTML = 'Filed and successfully got <b>Copy Rights</b> for both user and admin.';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }
  

  if(count==2){
    setTimeout(() => {
        title.innerHTML = 'Application name: <b>Doxwipe</b> (user)';
        framework.innerHTML = 'Developed using Flutter';
        appdetails.innerHTML = 'Application to upload image to Admin by user to delete image';
        extra.innerHTML = 'got copyrights for concept';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }
  

  if(count==3){
    setTimeout(() => {
        title.innerHTML = 'Application name: <b>Golden Chekku</b> (user)';
        framework.innerHTML = 'Developed using Flutter';
        appdetails.innerHTML = 'A e-commerce application for Oils, Masalas, DryFruits';
        extra.innerHTML = 'this is freelaunche project';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }

  if(count==4){
    setTimeout(() => {
      title.innerHTML = 'Application name: <b>Golden Chekku</b> (Admin)';
      framework.innerHTML = 'Developed using Flutter';
      appdetails.innerHTML = 'A e-commerce application for updating products Oils, Masalas, DryFruits';
      extra.innerHTML = 'this is freelaunche project';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }

  if(count==5){
    setTimeout(() => {
        title.innerHTML = 'Application name: <b>GitHub</b>';
        framework.innerHTML = 'Developed using HTML,CSS,JavaScript';
        appdetails.innerHTML = 'Website to Fetch details about GitHub Repository and user name';
        extra.innerHTML = 'a simple website for feteching API';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }

  if(count==6){
    setTimeout(() => {
      title.innerHTML = 'Application name: <b>Login Page</b>';
      framework.innerHTML = 'Developed using HTML,CSS,JavaScript';
      appdetails.innerHTML = 'Website for Login page';
      extra.innerHTML = 'a simple website for ui design';
        title.style.opacity = 1; 
        framework.style.opacity = 1; 
        appdetails.style.opacity = 1; 
        extra.style.opacity = 1;
    }, 500); 
  }
}




let curbutton = "about-tochange";

function toggle(tochange) {
    if (curbutton) {
        const currentElement = document.getElementById(curbutton);
        currentElement.classList.remove('fade-in', 'visible');
        currentElement.classList.add('fade-out');
    }

    const newElement = document.getElementById(tochange);
    newElement.classList.remove('fade-out');
    newElement.classList.add('fade-in', 'visible');

    curbutton = tochange;
}
