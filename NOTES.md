Implement Delete Notes

1. add the delete button to band component, delete button dispatches action.type 'DELETE_BAND' and passes band's id as action.id, dispatched action should be a prop from BandsContainer(mapDispatchToProps)
2. modify reducer so in the state each band is an object and has its own id and name
3. alter reducer to create new list of bands that don't inlcude deleted bands

STEPS
1. create the mapDispatchToProps for action.type delete_band in BandsContainer Component
2. modify reducer
3. add button with the delete props