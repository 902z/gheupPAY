import { getUsersUserIdAlerts } from "@/app/_apis/type";

export const item: getUsersUserIdAlerts = {
  offset: 0,
  limit: 6,
  count: 100,
  hasNext: true,
  items: [
    {
      item: {
        id: "item1",
        createdAt: "2024-01-01T08:00:00Z",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "app1",
            status: "accepted",
          },
          href: "/applications/app1",
        },
        shop: {
          item: {
            id: "shop1",
            name: "Coffee Heaven",
            category: "Cafe",
            address1: "123 Coffee St.",
            address2: "Suite 100",
            description: "A cozy place for coffee lovers.",
            imageUrl: "https://example.com/images/coffee_heaven.jpg",
            originalHourlyPay: 12,
          },
          href: "/shops/shop1",
        },
        notice: {
          item: {
            id: "notice1",
            hourlyPay: 15,
            description: "Barista needed for morning shift.",
            startsAt: "2024-01-15T06:00:00Z",
            workhour: 4,
            closed: false,
          },
          href: "/notices/notice1",
        },
        links: [],
      },
    },
    {
      item: {
        id: "item2",
        createdAt: "2024-01-02T09:00:00Z",
        result: "rejected",
        read: false,
        application: {
          item: {
            id: "app2",
            status: "rejected",
          },
          href: "/applications/app2",
        },
        shop: {
          item: {
            id: "shop2",
            name: "Bakery Bliss",
            category: "Bakery",
            address1: "456 Bread Ln.",
            address2: "Floor 2",
            description: "Fresh baked goods daily.",
            imageUrl: "https://example.com/images/bakery_bliss.jpg",
            originalHourlyPay: 10,
          },
          href: "/shops/shop2",
        },
        notice: {
          item: {
            id: "notice2",
            hourlyPay: 12,
            description: "Baker assistant needed.",
            startsAt: "2024-01-16T05:00:00Z",
            workhour: 5,
            closed: true,
          },
          href: "/notices/notice2",
        },
        links: [],
      },
    },
    {
      item: {
        id: "item3",
        createdAt: "2024-01-03T10:00:00Z",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "app3",
            status: "accepted",
          },
          href: "/applications/app3",
        },
        shop: {
          item: {
            id: "shop3",
            name: "Deli Delight",
            category: "Deli",
            address1: "789 Sandwich Rd.",
            address2: "Unit 3",
            description: "Delicious sandwiches and more.",
            imageUrl: "https://example.com/images/deli_delight.jpg",
            originalHourlyPay: 11,
          },
          href: "/shops/shop3",
        },
        notice: {
          item: {
            id: "notice3",
            hourlyPay: 13,
            description: "Deli clerk needed.",
            startsAt: "2024-01-17T07:00:00Z",
            workhour: 6,
            closed: false,
          },
          href: "/notices/notice3",
        },
        links: [],
      },
    },
    {
      item: {
        id: "item4",
        createdAt: "2024-01-04T11:00:00Z",
        result: "rejected",
        read: false,
        application: {
          item: {
            id: "app4",
            status: "pending",
          },
          href: "/applications/app4",
        },
        shop: {
          item: {
            id: "shop4",
            name: "Pizza Palace",
            category: "Restaurant",
            address1: "123 Pizza St.",
            address2: "Suite 200",
            description: "The best pizza in town.",
            imageUrl: "https://example.com/images/pizza_palace.jpg",
            originalHourlyPay: 14,
          },
          href: "/shops/shop4",
        },
        notice: {
          item: {
            id: "notice4",
            hourlyPay: 16,
            description: "Pizza chef needed.",
            startsAt: "2024-01-18T08:00:00Z",
            workhour: 7,
            closed: true,
          },
          href: "/notices/notice4",
        },
        links: [],
      },
    },
    {
      item: {
        id: "item5",
        createdAt: "2024-01-05T12:00:00Z",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "app5",
            status: "accepted",
          },
          href: "/applications/app5",
        },
        shop: {
          item: {
            id: "shop5",
            name: "Burger Barn",
            category: "Fast Food",
            address1: "456 Burger Blvd.",
            address2: "Floor 1",
            description: "Juicy burgers and fries.",
            imageUrl: "https://example.com/images/burger_barn.jpg",
            originalHourlyPay: 9,
          },
          href: "/shops/shop5",
        },
        notice: {
          item: {
            id: "notice5",
            hourlyPay: 11,
            description: "Cashier needed.",
            startsAt: "2024-01-19T09:00:00Z",
            workhour: 8,
            closed: false,
          },
          href: "/notices/notice5",
        },
        links: [],
      },
    },
    {
      item: {
        id: "item6",
        createdAt: "2024-01-06T13:00:00Z",
        result: "rejected",
        read: false,
        application: {
          item: {
            id: "app6",
            status: "rejected",
          },
          href: "/applications/app6",
        },
        shop: {
          item: {
            id: "shop6",
            name: "Sushi Spot",
            category: "Restaurant",
            address1: "789 Sushi St.",
            address2: "Unit 5",
            description: "Fresh sushi and rolls.",
            imageUrl: "https://example.com/images/sushi_spot.jpg",
            originalHourlyPay: 18,
          },
          href: "/shops/shop6",
        },
        notice: {
          item: {
            id: "notice6",
            hourlyPay: 20,
            description: "Sushi chef needed.",
            startsAt: "2024-01-20T10:00:00Z",
            workhour: 9,
            closed: true,
          },
          href: "/notices/notice6",
        },
        links: [],
      },
    },
  ],
  links: [],
};
