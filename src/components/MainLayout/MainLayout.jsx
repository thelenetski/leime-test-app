import Loader from "../Loader/Loader";
import { Suspense } from "react";
import css from "./MainLayout.module.css";
import Header from "../Header/Header";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import { selectTypeModal } from "../../redux/modal/selectors";
import { modalTypes } from "../../redux/modal/slice";
import EditMemForm from "../EditMemForm/EditMemForm";

const MainLayout = ({ children }) => {
  const type = useSelector(selectTypeModal);
  return (
    <main className={`flex justify-center flex-wrap ${css.mainWrapper}`}>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <ModalWindow>
        {type === modalTypes.editMem && <EditMemForm />}
      </ModalWindow>
    </main>
  );
};

export default MainLayout;
