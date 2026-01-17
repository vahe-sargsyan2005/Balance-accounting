export const useUi = () => {
    const activeDropdown = useState<string | null>('ui-active-dropdown', () => null)

    const toggleDropdown = (id: string) => {
        if (activeDropdown.value === id) {
            activeDropdown.value = null
        } else {
            activeDropdown.value = id
        }
    }

    const closeAll = () => {
        activeDropdown.value = null
    }

    return {
        activeDropdown,
        toggleDropdown,
        closeAll
    }
}