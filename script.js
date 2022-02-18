function register() {
	const main = document.getElementById("modal_trigger");

	if (main) {
		const modal = document.createElement("div");

		modal.onclick = function (e) {
			if (e.target.closest(".modal-button__back") || e.target.closest(".modal-overlay")) {
				// close();
				main.removeChild(modal);
			} else if (e.target.closest(".modal-content__heading--secondary")) {
				main.removeChild(modal);
				login();
			}
		};
        
		modal.classList.add("modal_wrapper");
		modal.style.animation = `easeIn ease-in 0.3s`;

		modal.innerHTML = `
        <div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-content__heading">
                    <div class="modal-content__heading--primary">Đăng ký</div>
                    <div class="modal-content__heading--secondary">Đăng nhập</div>
                </div>
                <div class="modal-content__body">
                    <div class="input-info">
                        <input
                            type="text"
                            placeholder="Số điện thoại hoặc email"
                            class="input-info__format"
                        />
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            class="input-info__format"
                        />
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            class="input-info__format"
                        />
                    </div>
                    <div class="policy">
                        <p>
                            Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                            <a href="" class="policy-link">Điều khoản dịch vụ</a> &
                            <a href="" class="policy-link"> Chính sách bảo mật</a>
                        </p>
                    </div>
                    <div class="modal-button">
                        <button class="modal-button__hover modal-button__back">
                            Trở lại
                        </button>
                        <button class="modal-button__hover modal-button__next">
                            Đăng ký
                        </button>
                    </div>
                </div>
                <div class="modal-content__footer">
                    <div class="wrapper">
                        <a
                            href=""
                            class="modal-icon__wrap"
                            style="background-color: #3c3cb8; color: white"
                        >
                            <ion-icon name="logo-facebook" class="modal-icon"></ion-icon>
                            <span>Kết nối với Facebook</span>
                        </a>
                    </div>
                    <div class="wrapper">
                        <a
                            href=""
                            class="modal-icon__wrap"
                            style="color: Black; background-color: chartreuse"
                        >
                            <ion-icon name="logo-google" class="modal-icon"></ion-icon>
                            <span>Kết nối với Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
		main.appendChild(modal);
	}
}

function login() {
	const main = document.getElementById("modal_trigger");

	if (main) {
		const modal = document.createElement("div");

		modal.classList.add("modal_wrapper");
		modal.style.animation = `easeIn ease-in 0.3s;`;

		modal.onclick = function (e) {
			if (e.target.closest(".modal-button__back") || e.target.closest(".modal-overlay")) {
				// close();
				main.removeChild(modal);
			} else if (e.target.closest(".modal-content__heading--secondary")) {
				main.removeChild(modal);
				register();
			}
		};

		modal.innerHTML = `
        <div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-content__heading">
                    <div class="modal-content__heading--primary">Đăng nhập</div>
                    <div class="modal-content__heading--secondary">Đăng ký</div>
                </div>
                <div class="modal-content__body">
                    <div class="input-info" style="margin-bottom: 30px;">
                        <input
                            type="text"
                            placeholder="Số điện thoại hoặc email"
                            class="input-info__format"
                        />
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            class="input-info__format"
                        />
                    </div>
                    <div class="modal-button">
                        <button class="modal-button__hover modal-button__back">
                            Trở lại
                        </button>
                        <button class="modal-button__hover modal-button__next">
                            Đăng nhập
                        </button>
                    </div>
                </div>
                <div class="modal-content__footer">
                    <div class="wrapper">
                        <a
                            href=""
                            class="modal-icon__wrap"
                            style="background-color: #15ff00; color: white"
                        >
                            <ion-icon name="chatbubble-ellipses-outline" class="modal-icon"></ion-icon>
                            <span>SMS</span>
                        </a>
                    </div>
                    <div class="wrapper">
                        <a
                            href=""
                            class="modal-icon__wrap"
                            style="background-color: #3c3cb8; color: white"
                        >
                            <ion-icon name="logo-facebook" class="modal-icon"></ion-icon>
                            <span>Facebook</span>
                        </a>
                    </div>
                    <div class="wrapper">
                        <a
                            href=""
                            class="modal-icon__wrap"
                            style="color: Black; background-color: #00ff55"
                        >
                            <ion-icon name="logo-google" class="modal-icon"></ion-icon>
                            <span>Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
		main.appendChild(modal);
	}
}
