document.querySelector(".times").innerText=10;
setTimeout(() => {
    document.querySelector(".times").innerText=9;
    setTimeout(() => {
        document.querySelector(".times").innerText=8;
        setTimeout(() => {
            document.querySelector(".times").innerText=7;
            setTimeout(() => {
                document.querySelector(".times").innerText=6;
                setTimeout(() => {
                    document.querySelector(".times").innerText=5;
                    setTimeout(() => {
                        document.querySelector(".times").innerText=4;
                        setTimeout(() => {
                            document.querySelector(".times").innerText=3; 
                            setTimeout(() => {
                                document.querySelector(".times").innerText=2;
                                setTimeout(() => {
                                    document.querySelector(".times").innerText=1;
                                    setTimeout(() => {
                                        document.querySelector(".times").innerText="Happy Independence Day";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000); 
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);
