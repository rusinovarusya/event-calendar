import CalendarGrid from '../../widgets/calendar-grid/CalendarGrid';
import Header from '../../widgets/header/Header';
import MainPageContainer from './main-page-container/MainPageContainer';
import Authentication from '../../widgets/authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setAuthenticationModalInvisible } from '../../features/slices/modalSlice';
import CreatingEvent from '../../widgets/creating-event/CreatingEvent';

const MainPage = () => {
  const authenticationModalVisible = useSelector((state: RootState) => state.modal.authenticationModalVisible);
  const createEventModalVisible = useSelector((state: RootState) => state.modal.createEventModalVisible);

  const dispatch = useDispatch();

  return (
    <MainPageContainer>
      <Header />
      <CalendarGrid />

      {authenticationModalVisible && (
        <Authentication closeModal={() => dispatch(setAuthenticationModalInvisible())} />
      )}
      {createEventModalVisible && (
        <CreatingEvent />
      )}
    
    </MainPageContainer>
  );
}

export default MainPage;