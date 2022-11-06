import NavigatorOnline from 'react-navigator-online'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ConnectLine() {
  function showMessage(status) {
    if (status) {
      toast.success('now! you have an internet connection.')
    } else {
      toast.error('now! you have no internet connection.')
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        onClose={() => alert('ok')}
      />
      <NavigatorOnline onChange={(status) => showMessage(status)} />
    </>
  )
}
