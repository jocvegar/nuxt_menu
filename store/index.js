export const state = () => ({
    menuItems: [],
})

export const mutations = {
    setmenuItems(state, list) {
        state.menuItems = list
    }
}

export const actions = {
    async nuxtServerInit({commit}) {
        let files = await require.context('~/assets/content/menu/', false, /\.json$/)
        let menuItems = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5)
            return res
        })
    await commit('setmenuItems', menuItems)       
    }
}
