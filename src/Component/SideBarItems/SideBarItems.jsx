import PropTyes from 'prop-types'
import SideBarTable from '../SideBarTable/SideBarTable';

const SideBarItems = ({sideBar}) => {
    return (
        <div className="w-1/3 bg-gray-300 rounded-xl">
           <h1 className="text-3xl font-bold text-center py-5">Want to cook:{sideBar.length}</h1>
           <hr />
          
           {
            sideBar.map((SideBarObj,index)=><SideBarTable key={index} SideBarObj={SideBarObj}></SideBarTable>)
           }
          
        </div>
    );
};
SideBarItems.propTyes={
    sideBar:PropTyes.array
}
export default SideBarItems;