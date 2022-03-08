# modern-graphQL-with-node

![What is GraphQL](https://user-images.githubusercontent.com/10555820/157201871-6cc1ca7a-fa87-4937-9724-6f7af19d9bd6.jpg)

![apollo-client](https://user-images.githubusercontent.com/10555820/157202235-82bc0858-0dd2-482d-9d66-28962815d917.jpg)

> 好久没用 `apollo`，老哥竟然玩到这步，🐂 🐂 🐂
>
> 好卷，`websocket` 更新 `fields`

## Query

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

## Mutation

![Mutations-0006](https://user-images.githubusercontent.com/10555820/157180529-0d050484-8f40-41fd-a890-a03318f30732.jpg)
![Mutations-0007](https://user-images.githubusercontent.com/10555820/157180543-ca566970-0e0f-45b6-9d3e-e3b8d1bf4893.jpg)
![Mutations-0008](https://user-images.githubusercontent.com/10555820/157180547-d1911d59-c517-427a-9cb8-8da6527b6485.jpg)
![Mutations-0009](https://user-images.githubusercontent.com/10555820/157180557-57e0336e-d6c2-4980-b8ec-877f645d37f4.jpg)

## Rules of GraphQL Design

> ⭐️ 这节有点重要，买买，赶紧抄写来默写！

- 规则一：永远先从更高的抽象层级进行设计，先考虑类型与类型之间的关系，再去考虑具体的字段。
- 规则二：永远不要在 API 中暴露不必要的实现细节。
- 规则三：围绕着业务背景重新思考你的 GraphQL API，切忌直接照搬数据库表结构、视觉稿或已有的 REST API。
- 规则四：永远记得在 GraphQL 中去掉一个字段要比新增一个字段困难的多。
- 规则五：绝大多数业务对象都应该集成自 `Node` 接口。
- 规则六：将同一类型中互相密切相关的几个字段单独抽出来作为子对象。
- 规则七：始终记得检查数组字段是否有必要支持分页。
- 规则八：尽可能直接返回关联对象本身而不是仅仅返回关联对象的ID。
- 规则九：给字段起名时尽可能体现其在业务上的语义，而不是简单照搬数据库中的字段名。
- 规则十：使用自定义的标量类型，有助于更好地说明字段隐含的上下文。
- 规则十一：对于值可以被穷举的字段，尽可能使用枚举类型。
- 规则十二：GraphQL API提供的应该是业务逻辑而非数据。尽可能把业务逻辑放在 API 中实现，而非任由各个客户端自行实现。
- 规则十三：记得同时提供原始字段与业务相关的计算字段。
- 规则十四： 根据真实的业务需要思考 GraphQL 类型支持哪些种类的操作。
- 规则十五： 设计 Mutation 很复杂，不能教条式地进行照搬。
- 规则十六：尽可能让 Mutation 支持批量操作。
- 规则十七： 使用形如 `orderCancel` 而不是 `cancelOrder`的命名风格来个 Mutation 命名。
- 规则十八： 仅将真的必填的字段在 Input 中设为必填。
- 规则十九：当 Input 类型比较复杂导致客户端进行验证过于复杂时，可以将之弱化成更通用的类型以便于由服务器进行验证。例如用 `string` 标量 替代 `email` 标量，然后在服务器端进行验证并将所有的错误提示一次性返回给客户端。
- 规则二十：当输入的格式可能有歧义而且客户端验证并不困难的时候，应该有限考虑使用强类型（例如 `DateTime` 优于 `string`）。
- 规则二十一： 结构化 Mutation 的 Inpute 以减少重复，既是是以在类型层面上放宽对于某些字段的要求性约束为代价。
- 规则二十二： Mutation的中应该包含一个标识业务层面错误的数组。
- 规则二十三：大多数的 Payload .字段都应该是可以为空的，除非确保其在错误的情况下也有返回值。
