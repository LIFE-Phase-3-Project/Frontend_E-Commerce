import { useSelector } from "react-redux";
import { Code } from "../../components/admin/dashboard/discount-code/Code";
import { Scene } from "../../components/admin/dashboard/discount-code/Scene";

export const AdminDiscountCode = () => {
    const discountCode = useSelector(state => state.discountCode.discountCode);
    return (
        <div className="flex items-center h-screen">
            {discountCode ? <Code /> : <Scene />}
        </div>
    );
};
