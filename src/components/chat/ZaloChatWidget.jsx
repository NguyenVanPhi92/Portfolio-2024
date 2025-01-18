import { SiZalo } from 'react-icons/si'

// const ZaloChatWidget = () => {
//   useEffect(() => {
//     const zaloWidgetScript = document.createElement('script')
//     zaloWidgetScript.src = 'https://sp.zalo.me/plugins/sdk.js'
//     zaloWidgetScript.async = true
//     document.body.appendChild(zaloWidgetScript)

//     // Cấu hình widget Zalo
//     window.ZaloChatWidget = window.ZaloChatWidget || {}
//     window.ZaloChatWidget.init({
//       oaid: 'YOUR_OAID', // Thay YOUR_OAID bằng Official Account ID của bạn
//       theme: '1', // Giao diện (1: Light, 2: Dark)
//       position: 'right', // Vị trí (right, left)
//       width: '350px', // Chiều rộng widget
//       height: '500px' // Chiều cao widget
//     })
//   }, [])

//   return null
// }

// export default ZaloChatWidget

const ZaloChatWidget = () => {
  return (
    <div className='fixed float-right p-2 m-4 text-white bg-teal-600 rounded-md cursor-pointer right-4 bottom-28 opacity-90'>
      <SiZalo size={18} />
    </div>
  )
}

export default ZaloChatWidget
