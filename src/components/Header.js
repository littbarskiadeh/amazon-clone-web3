import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import './Header.css'

import Amazon from '../images/logo.png';
import Bookstore from '../images/bookstore.png';
import USA from '../images/usa.png';
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";


const { Search } = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {

  const { account, authenticate } = useMoralis();
  
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img src={Amazon} alt="amazon logo" className="logo"></img>
            <img src={Bookstore} alt="store logo" className="logo"></img>
            <Search
              placeholder="Find a product"
              enterButton
              className="searchBar"
            />
            <Button
              className='login'
              key="1" type="primary"
              onClick={() => authenticate()}>
              {account ? <span>{account.slice(0,5)}...</span> : <span>Login</span>}
            </Button>
            <Space>

              <Badge count={0} showZero>
                <span>
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>

              <Space className='header-buttons' size={"small"}>
                <img src={USA} alt="region" className="flag"></img>
              </Space>

            </Space>

          </>
        ]}>
      </PageHeader>

      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e,index) => {
            return (
              <Link to="/categories" state={e} className="categories" key={index}>
                {e}
              </Link>
            )

          })}
        </Space>
      </div>

    </div>
  )
}

export default Header;