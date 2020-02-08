  export default {
    namespaced: true,
    state: {
      dashboardTableKeys: [],
      geofences: []
    },
    getters: {
        dashboardTableKeys:(state)=>state.dashboardTableKeys,
        geofences:(state)=>state.geofences,
    },
    mutations: {
      SET_SELECTED_VAL_OF_FIELD: (state,val)=>{
          state.dashboardTableKeys[val.index].selected = val.value
      },
      SET_GEOFENCES: (state,val)=>{
          state.geofences = val
      },
      CLEAR_FIELDS_DATA: (state,val) => {
        state.dashboardTableKeys = []
        state.geofences = []
      }
    }
  };