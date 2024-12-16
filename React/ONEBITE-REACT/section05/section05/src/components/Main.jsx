import "./Main.css"

function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }

    if (user.isLogin) {
			return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    // return (
    //     <>
    //     {user.isLogin ? (
    //         <div>로그아웃</div>
    //     ) : (
    //         <div>로그인</div>
    //     )}
    //     </>
    // );
}

export default Main;