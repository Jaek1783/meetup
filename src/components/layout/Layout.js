import MainNavigation from './MainNavigation';
import modules from './Layout.module.css';
const Layout = (props)=>{
    return <div>
        <MainNavigation />
        <main className={modules.main}>
            {props.children}
        </main>
    </div>
};

export default Layout;