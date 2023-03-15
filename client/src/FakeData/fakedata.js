


import axios from "axios";

const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`/products`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
}, []);


const [colections, setColections] = useState([]);
useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/colections`);
          setColections(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);


    const [cats, setCats] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/cats`);
          setCats(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);



    console.log(cats);
    console.log(products);
    console.log(colections);



const fakeCollecitonData = [
    {
        id:1,
        title:"Artemis",
        img:"Resim url"
    },
    {
        id:2,
        title:"Kreasyon",
        img:"Resim url"
    },
    {
        id:3,
        title:"İpek",
        img:"Resim url"
    }
]


const fakeCategoryData = [
    {
        id:1,
        title: "Silk",
        ipekType: "Viskon",
    }
]

const fakeCarpetData = [
   
     {
        id:1,
        title:"Artemis bilmemne halı",
        collection: "Artemis Halı Koleksiyonu",
        category: "Silk",
        ipektype: "Viskon",
        havHeight: "5 mm",
        varanty: 2,
        colorPallette: "Krem-Lacivert",
        img: "ttps://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1500,
        isNew: false,
        isDiscount: true,
        isFreeCargo: false,
    },
    {
        id:2,
        title:"İpek bilmemne halı",
        collection: "İpek Halı Koleksiyonu",
        category: "Silk",
        ipektype: "Viskon",
        havHeight: "5 mm",
        varanty: 3,
        colorPallette: "Krem-Lacivert",
        img: "ttps://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1400,
        price: 1200,
        isNew: false,
        isDiscount: true,
        isFreeCargo: false,
    },
    {
        id:3,
        title:"İpek bilmemne halı",
        collection: "İpek Halı Koleksiyonu",
        category: "Silk",
        ipektype: "Viskon",
        havHeight: "5 mm",
        varanty: 3,
        colorPallette: "Krem-Lacivert",
        img: "ttps://st.myideasoft.com/idea/ec/65/myassets/products/541/11298mavi_min.jpg?revision=1636027235",
        oldPrice: 1800,
        price: 1300,
        isNew: false,
        isDiscount: true,
        isFreeCargo: false,
    },
]