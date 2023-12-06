import Header from './header'

const Layout = ({ children }) => {

    // const { height, ref } = useAppContext()

    return (
        <>
            <Header />
            <main className='pt-[70px]'>
                {children}
            </main>
        </>
    )
}

export default Layout