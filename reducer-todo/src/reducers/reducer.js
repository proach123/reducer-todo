export const initialState = 
     [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
  
  
  export const todoReducer = (state, action) => {

    switch (action.type) {
      case 'ADD_ITEM':
        return [
          ...state, {task: action.payload, id: Date.now(), completed:false}
        ];
      case 'TOGGLE':
          const newList = state.map(item => {
              console.log(action.payload, 'inside if')
              if(action.payload == item.id){
                  return {
                    ...item,
                    completed: !item.completed
                  }
              }else {return item}
              
          })
          
          return [...newList]
        case 'CLEAR':
            console.log('hit clear')
            const filteredList = state.filter(
                item => {
                    console.log(item)
                    return (!item.completed)
                }
            )
            return[
                ...filteredList
            ]
      default:
        return state;
    }
  };


//   addItem = itemName => {
//     const newItem = {
//       task: itemName,
//       id: Date.now(),
//       completed: false
//     };
//     this.setState({
//       list: [...this.state.list, newItem]
//     });
//   };


// toggleId = id => {
//     const newList = this.state.list.map(item => {
//       if(item.id === id){
//       return {
//         ...item,
//         completed: !item.completed
//       }} else {return item
//       }
//     });
  

// clearCompleted = id => {
//     const filteredList = this.state.list.filter(item => {
//       return (!item.completed)
//     })
//   console.log(filteredList,'working')
  
//   this.setState({list:filteredList})
//   }