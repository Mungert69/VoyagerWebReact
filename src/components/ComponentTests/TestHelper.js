export const isChecked = (name, showComponents) =>{

    showComponents.forEach(showComponent => {
        if (showComponent.value === name){
                        
           return showComponent.isChecked;}
     });
  };