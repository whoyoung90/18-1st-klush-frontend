import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./NavMenu/Product/Product";
import LushIntro from "./NavMenu/LushIntro/LushIntro";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="lushLogo">LUSH</div>
        <ul className="clickMenu">
          <Product />
          <LushIntro />
          <li className="dropDown">
            <Link className="navIntro" to="#">
              매장 안내
            </Link>
          </li>
          <li className="dropDown">
            <Link className="navIntro" to="#">
              스파
            </Link>
          </li>
          <li className="dropDown">
            <Link className="navIntro" to="#">
              이벤트
            </Link>
          </li>
        </ul>
        <ul className="clickButton">
          <li>
            <Link to="#">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDUgNTEyLjAwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA1Ljc0OSw0NzUuNTg3bC0xNDUuNi0xNDUuNmMyOC4yMDMtMzQuODM3LDQ1LjE4NC03OS4xMDQsNDUuMTg0LTEyNy4zMTdjMC0xMTEuNzQ0LTkwLjkyMy0yMDIuNjY3LTIwMi42NjctMjAyLjY2NyAgICBTMCw5MC45MjUsMCwyMDIuNjY5czkwLjkyMywyMDIuNjY3LDIwMi42NjcsMjAyLjY2N2M0OC4yMTMsMCw5Mi40OC0xNi45ODEsMTI3LjMxNy00NS4xODRsMTQ1LjYsMTQ1LjYgICAgYzQuMTYsNC4xNiw5LjYyMSw2LjI1MSwxNS4wODMsNi4yNTFzMTAuOTIzLTIuMDkxLDE1LjA4My02LjI1MUM1MTQuMDkxLDQ5Ny40MTEsNTE0LjA5MSw0ODMuOTI4LDUwNS43NDksNDc1LjU4N3ogICAgIE0yMDIuNjY3LDM2Mi42NjljLTg4LjIzNSwwLTE2MC03MS43NjUtMTYwLTE2MHM3MS43NjUtMTYwLDE2MC0xNjBzMTYwLDcxLjc2NSwxNjAsMTYwUzI5MC45MDEsMzYyLjY2OSwyMDIuNjY3LDM2Mi42Njl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Mi4zMzcgNDcyLjMzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMzk2LjA2MSwxMTYuNTc3aC03Ni4zNzdWOTEuNzE1QzMxOS42ODQsNDEuMTQzLDI3OC41NDMsMCwyMjcuOTY5LDBjLTUwLjU3MywwLTkxLjcxMyw0MS4xNDMtOTEuNzEzLDkxLjcxNXYyNC44NjJINzAuNDUgICBjLTUuNTQ5LDAtMTAuMDUsNC40OTctMTAuMDUsMTAuMDVMMy45MTQsNDYyLjI4NGMwLDUuNTU0LDQuNDk3LDEwLjA1MywxMC4wNTUsMTAuMDUzaDQ0NC4zOTdjNS41NTQsMCwxMC4wNTctNC40OTksMTAuMDU3LTEwLjA1MyAgIGwtNjIuMzEtMzM1LjY1N0M0MDYuMTEzLDEyMS4wNzMsNDAxLjYxNCwxMTYuNTc3LDM5Ni4wNjEsMTE2LjU3N3ogTTE1Ni4zNTIsOTEuNzE1YzAtMzkuNDksMzIuMTMtNzEuNjE0LDcxLjYxMi03MS42MTQgICBjMzkuNDksMCw3MS42MTgsMzIuMTMsNzEuNjE4LDcxLjYxNHYyNC44NjJoLTE0My4yM1Y5MS43MTV6IE00NDguMzIyLDQ1Mi4yMzVIMjQuMDE1bDU2LjQ3OS0zMTUuNTYyaDU1Ljc1M3Y0NC4yNTggICBjLTQuODQ5LDMuMjQ2LTguMDM3LDguNzY1LTguMDM3LDE1LjAzNWMwLDkuOTg4LDguMDksMTguMDksMTguMDg3LDE4LjA5YzkuOTg1LDAsMTguMDktOC4wOTUsMTguMDktMTguMDkgICBjMC02LjI3NS0zLjE5Ny0xMS43ODktOC4wNDQtMTUuMDM1di00NC4yNThoMTQzLjI0NHY0NC4yNThjLTQuODQ5LDMuMjQ2LTguMDQxLDguNzY1LTguMDQxLDE1LjAzNSAgIGMwLDkuOTg4LDguMDkzLDE4LjA5LDE4LjA5LDE4LjA5YzkuOTg3LDAsMTguMDg5LTguMDk1LDE4LjA4OS0xOC4wOWMwLTYuMjc1LTMuMjAxLTExLjc4OS04LjA0Ni0xNS4wMzV2LTQ0LjI1OGg2Ni4zMjkgICBMNDQ4LjMyMiw0NTIuMjM1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
              <span className="cartNumber">0</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU1MS4xMyA1NTEuMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3NS41NjUgMGMtMTUxLjk0NCAwLTI3NS41NjUgMTIzLjYyMS0yNzUuNTY1IDI3NS41NjVzMTIzLjYyMSAyNzUuNTY1IDI3NS41NjUgMjc1LjU2NSAyNzUuNTY1LTEyMy42MjEgMjc1LjU2NS0yNzUuNTY1LTEyMy42MjEtMjc1LjU2NS0yNzUuNTY1LTI3NS41NjV6bTAgMzQuNDQ2YzEzMi45NTUgMCAyNDEuMTE5IDEwOC4xNjQgMjQxLjExOSAyNDEuMTE5IDAgNTUuMzktMTguOTY2IDEwNi4zMjItNTAuNDgzIDE0Ny4wNzctMTIwLjg4OC01Ny4yMTItMjYwLjM4Ni01Ny4yMTItMzgxLjI3MiAwLTMxLjUxNy00MC43NTUtNTAuNDgzLTkxLjY4Ny01MC40ODMtMTQ3LjA3NyAwLTEzMi45NTUgMTA4LjE2NC0yNDEuMTE5IDI0MS4xMTktMjQxLjExOXptLTE2Ni40NzQgNDE1LjEyNWMxMDYuMjY4LTQ3LjA2OSAyMjYuNjgtNDcuMDY5IDMzMi45NDggMC00My4zMjQgNDEuNDY2LTEwMS45MDkgNjcuMTE1LTE2Ni40NzQgNjcuMTE1cy0xMjMuMTUtMjUuNjUtMTY2LjQ3NC02Ny4xMTV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjc1LjU2NSAzNDQuNDU2YzU2Ljk4MyAwIDEwMy4zMzctNDYuMzUzIDEwMy4zMzctMTAzLjMzN3MtNDYuMzU0LTEwMy4zMzctMTAzLjMzNy0xMDMuMzM3LTEwMy4zMzcgNDYuMzUzLTEwMy4zMzcgMTAzLjMzNyA0Ni4zNTQgMTAzLjMzNyAxMDMuMzM3IDEwMy4zMzd6bTAtMTcyLjIyOGMzNy45OTUgMCA2OC44OTEgMzAuODk3IDY4Ljg5MSA2OC44OTEgMCAzNy45OTUtMzAuODk3IDY4Ljg5MS02OC44OTEgNjguODkxLTM3Ljk5NSAwLTY4Ljg5MS0zMC44OTctNjguODkxLTY4Ljg5MXMzMC44OTctNjguODkxIDY4Ljg5MS02OC44OTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
