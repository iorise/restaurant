import { useEffect, useState } from "react"

type Menu = {
  id: number
  image: string
  name: string
  description: string
}

async function getMenu(): Promise<Menu[]> {
  const res = await fetch ("http://localhost:5000/menu")
  return res.json()
}


export default function MenuList() {
  const [menus, setMenus] = useState<Menu[]>([])

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuData = await getMenu()
        setMenus(menuData)
      } catch (error) {
        console.log("error")
      }
    }

    fetchMenuData()
  }, [])
  return (
    <div className="relative">
      <div className="background">
      
      </div>
      <div className="content-menu text-main-fourth">
        <div className="bg-menu bg-main-bgMain bg-opacity-20 pl-5 pr-5 rounded-lg ">
          {menus.map((menu) => (
            <div key={menu.id}>
              <img className="img-menu" src={menu.image} alt="" />
              <p>{menu.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
