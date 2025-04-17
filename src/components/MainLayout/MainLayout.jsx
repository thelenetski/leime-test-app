import Loader from "../Loader/Loader";
import { Suspense } from "react";
import css from "./MainLayout.module.css";
import Header from "../Header/Header";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import {
  selectIsOpenModal,
  selectTypeModal,
} from "../../redux/modal/selectors";
import { modalTypes } from "../../redux/modal/slice";
import EditMemForm from "../EditMemForm/EditMemForm";
import OpenMeme from "../OpenMeme/OpenMeme";
import clsx from "clsx";

const MainLayout = ({ children }) => {
  const type = useSelector(selectTypeModal);
  const isModalOpen = useSelector(selectIsOpenModal);
  return (
    <div className={clsx(css.container, isModalOpen && css.blur)}>
      <Header />
      <main className={`flex justify-center flex-wrap ${css.mainWrapper}`}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <ModalWindow>
          {type === modalTypes.editMem && <EditMemForm />}
          {type === modalTypes.openMem && <OpenMeme />}
        </ModalWindow>
      </main>
    </div>
  );
};

export default MainLayout;
