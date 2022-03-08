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

### Mutation

![Mutations-0006](https://user-images.githubusercontent.com/10555820/157180529-0d050484-8f40-41fd-a890-a03318f30732.jpg)
![Mutations-0007](https://user-images.githubusercontent.com/10555820/157180543-ca566970-0e0f-45b6-9d3e-e3b8d1bf4893.jpg)
![Mutations-0008](https://user-images.githubusercontent.com/10555820/157180547-d1911d59-c517-427a-9cb8-8da6527b6485.jpg)
![Mutations-0009](https://user-images.githubusercontent.com/10555820/157180557-57e0336e-d6c2-4980-b8ec-877f645d37f4.jpg)
