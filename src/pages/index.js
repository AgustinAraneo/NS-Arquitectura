import Desktop from '../components/desktop/Desktop'
import Mobile from '../components/mobile/Mobile'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { FaSpinner } from 'react-icons/fa'


const Index = () => {
	const { isDesktop } = useIsDesktop()

	if (isDesktop) {
		return <Desktop />
	} else if (isDesktop === false) {
		return <Mobile />
	}
	return <p><FaSpinner size={50} color="grey" className='animate-spin mx-auto mt-[40rem] bg-white text-black text-5xl'/></p>
}

export default Index