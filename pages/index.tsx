import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { ApiCategory } from '../lib/shopApiTypes'
import { Category } from '@prisma/client'
import ProductsContainer from '../components/ProductsContainer'
import { MDBIcon } from 'mdb-react-ui-kit'

export default function Home() {
  const [categoryList, setCategoryList] = useState<Category[]>(null)
  useEffect(() => {
    fetch('/api/category')
      .then(r => r.json())
      .then((data: ApiCategory) => {
        let cList: Category[] = []
        data.forEach(c => {
          cList.push({
            id: c.id,
            name: c.name,
          })
        });
        setCategoryList(cList)
      })
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {
        categoryList &&
        categoryList.map((category => {
          let titleIcon = <MDBIcon fas icon='plus'></MDBIcon>;
          if (category.id == 1) { titleIcon = <MDBIcon fas icon='plus'></MDBIcon>; }
          else if (category.id == 2) { titleIcon = <MDBIcon fas icon='cart-plus'></MDBIcon>; }
          else if (category.id == 3) { titleIcon = <MDBIcon fas icon='percent'></MDBIcon>; }

          return (<ProductsContainer
            title={category.name}
            categoryId={category.id}
            titleIcon={titleIcon}
          />)
        }))
      }
    </Layout>
  )
}
