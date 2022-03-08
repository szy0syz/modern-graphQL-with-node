# modern-graphQL-with-node

## e-commerce-app

![image](https://user-images.githubusercontent.com/10555820/157001792-f930c2b7-707d-4f39-8e29-c9132425ba5f.png)

> 好久没用 `apollo`，老哥竟然玩到这步，🐂 🐂 🐂
>
> 好卷，`websocket` 更新 `fields`

- GraphQL Scalar Types
  - `String`, `Int`, `Float`, `Boolean`
- GraphQL Array Types
  - `[String!]!`
  - 两个不为空 这个设计好，前后两端同时被约束，放放心心。

```js
query Categories($categoryId: ID!) {
  category(id: $categoryId) {
    id
    name
    products {
      name
    }
  }
  products {
    name
    description
    quantity
    image
    category {
      name
      products {
        name
      }
    }
  }
}
```
