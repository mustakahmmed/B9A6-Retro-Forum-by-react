import PropType from 'prop-types'

const SideBarTable = ({SideBarObj}) => {
    const{recipe_name,preparing_time,calories}=SideBarObj
    return (
        <div>
            <table className='w-4/5 my-5 mx-auto '>
                <tr className='font-semibold  bg-slate-50 p-7 text-center'>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                    <td><button className='px-3 py-2 rounded-xl bg-green-600 text-white'>Coocking</button></td>
                </tr>
            </table>
        </div>
    );
};
SideBarTable.propTypes={
    SideBarObj:PropType.object
}

export default SideBarTable;