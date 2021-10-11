import React from 'react'

export const DataContext = React.createContext();



export class Context extends React.Component  {
  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes 01",
        "src": "https://media-cdn.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet5.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "2",
        "title": "Nike Shoes 02",
        "src": "https://kpopnews.vn/uploadcontent/fileuploads/uploads/2019/04/03/irene3.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 19,
        "colors":["red","crimson","teal"],
        "count": 1
    },
    {
        "_id": "3",
        "title": "Nike Shoes 03",
        "src": "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/15/17346843713122589225601731033365589088201839n-16184231987681622721137.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 50,
        "colors":["lightblue","white","crimson","teal"],
        "count": 1
    },
    {
        "_id": "4",
        "title": "Nike Shoes 04",
        "src": "https://2sao.vietnamnetjsc.vn/images/2021/01/19/00/28/irene-1.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 15,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "5",
        "title": "Nike Shoes 05",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtfnEkTX3X1B5_hP-ogywkLeWFGIkIqq0Yg&usqp=CAU",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 10,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "6",
        "title": "Nike Shoes 06",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3JnPS_W_JrQE4G9zA-uGJ2rF7RqGg-MX2Q&usqp=CAU",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 17,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    }
    ],
    cart: [],
    total: 0
  }

  addCart = (id) => {
    const {products, cart} = this.state
    const check = cart.every(item => {
      return item._id !== id
    })
    if (check) {
      const data = products.filter(product => {
      return product._id === id
    })
    this.setState({cart: [...cart, ...data]})
    alert("Đã thêm sản phẩm vào giỏ hàng")
    }
    else {
      alert("Sản phẩm đã có trong giỏ hàng")
    }
  }

  increase = (id) => {
    const {cart} = this.state
    cart.forEach(item => {
      if (item._id === id) {
        item.count +=1
      }
    })
    this.setState({cart: cart})
    this.getTotal()
  }

  redution = (id) => {
    const {cart} = this.state
    cart.forEach(item => {
      if (item._id === id) {
        item.count ===1 ? item.count = 1 : item.count -=1
      }
    })
    this.setState({cart: cart})
    this.getTotal()
  }

  removeProduct = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng ??")){
      const {cart} = this.state
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1)
        }
      })
      this.setState({cart: cart})
      this.getTotal()
    }
  }

  getTotal = () => {
    const {cart} = this.state
    const res = cart.reduce((prev, cur) => {
      return prev + (cur.price * cur.count)
    }, 0)
    this.setState({total: res})
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if (dataCart != null) {
      this.setState({cart: dataCart})
    }

    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
    if (dataTotal != null) {
      this.setState({total: dataTotal})
    }
  }

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  }

  render() {
    const {products, cart, total} = this.state

    const {addCart, redution, increase, removeProduct, getTotal} = this
    return (
      <DataContext.Provider value={{products, cart, total, addCart, increase, redution, removeProduct, getTotal}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
