import { BiFoodMenu } from 'react-icons/bi'
import { BsPeople, BsCash } from 'react-icons/bs'


const UserOrder = ({order}) => {
  return (
    <>
        <div className="userOrderContainer">
            <div className="userOrderContainerMainPart">
                <div className="userOrderContainerPlan">{order?.tags?.join(', ')}</div>
                <div className="userOrderContainerMealsContainer">
                    {
                        order?.meals.map((m, index) => <div key={index} className="userOrderContainerMeal">- {m}</div>)
                    }
                </div>
            </div>
            <div className="userOrderContainerRightPart">
                <div className="userOrderContainerRightPartContainer">
                    <div className="userOrderContainerRightPartItem"><BsPeople/> <span className="userOrderContainerRightPartitemData">{order?.numberOfPeople}</span></div>
                </div>
                <div className="userOrderContainerRightPartContainer">
                    <div className="userOrderContainerRightPartItem"><BiFoodMenu/> <span className="userOrderContainerRightPartitemData">{order?.numberOfRecipes}</span></div>
                </div>
                <div className="userOrderContainerRightPartContainer">
                    <div className="userOrderContainerRightPartItem"><BsCash/> <span className="userOrderContainerRightPartitemData">{order?.numberOfPeople*order?.numberOfRecipes*5+10}KM</span></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserOrder