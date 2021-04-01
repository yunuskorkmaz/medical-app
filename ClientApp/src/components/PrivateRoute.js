import React from 'react';

const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
    // const { state, dispath} = React.useContext();

    return (
        <>
            <Route
                {...rest}
                render={(childProps) => {
                    // if(!state.isLogined){
                    // if(false){
                    //     return <Redirect to={{pathname : '/login'}}/>
                    // }
                    return <Component />;
                }}
            />
        </>
    );
}

export default PrivateRoute;