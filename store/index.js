export const state = () => ({
    menuItems: [],
    // filteredMenuItems: [],
    searchWord: "",
})

export const getters = {
    getSearchWord(state) {
        return state.searchWord 
    },
}

export const mutations = {
    setMenuItems(state, list) {
        state.menuItems = list
    },
    setSearchWordM(state, payload) {
        state.searchWord = payload
    },
    // filterMenuItems(state, word) {
    //     if (!(word) || word === '{}') {
    //         state.searchWord = null
    //         state.filteredMenuItems = null
    //         return this.menuItems
    //     } else {
    //         word = word.trim().toLowerCase()
    //         state.filteredMenuItems = state.menuItems.filter((item) => {
    //             return (item.title.toLowerCase().match(word))
    //         })
    //     }
    // }
}

export const actions = {
    async nuxtServerInit({commit}) {
        let files = await require.context('~/assets/content/menu/', false, /\.json$/)
        let menuItems = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5)
            console.log("res" + res)
            return res
        })
        await commit('setMenuItems', menuItems)       
    },
    async setSearchWord({commit}, payload) {
        await commit('setSearchWordM', payload)  
    },
    // async filterMenuItems({commit, state}) {
    //     await commit('filterMenuItems', state.searchWord)  
    // }
}
