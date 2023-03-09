import menuContext from "./menuContext"
const MenuState = (props) => {
    const menuData = {
        items: ["Existing Inventory", "Used Inventory", "Tade-in", "Demo Drive", "Insurance", "Powerwall", "Commercial Energy", "Utilities", "Charging", "Find Us", "Support", "Investors Relations", "Shop"]
    }
    return (
        <menuContext.Provider value={menuData.items}>
            {props.children}
        </menuContext.Provider>
    )
}
export default MenuState;