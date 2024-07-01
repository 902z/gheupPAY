import { getUsersUserIdAlerts } from "@/app/_apis/type";

type alertMockData = getUsersUserIdAlerts;

export const makeAlertMockData = (): alertMockData => {
  return {
    offset: 0,
    limit: 0,
    count: 0, // 전체 개수
    hasNext: true, // 다음 내용 존재 여부
    items: [
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "accepted",
          read: false,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "accepted",
          read: true,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "accepted",
          read: true,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "accepted",
          read: true,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "accepted",
          read: true,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
      {
        item: {
          id: Math.random().toString(),
          createdAt: "hi",
          result: "rejected",
          read: true,
          application: {
            item: {
              id: Math.random().toString(),
              status: "pending",
            },
            href: "hi",
          },
          shop: {
            item: {
              id: Math.random().toString(),
              name: "hi",
              category: "hi",
              address1: "hi",
              address2: "hi",
              description: "hi",
              imageUrl: "hi",
              originalHourlyPay: 0,
            },
            href: "hi",
          },
          notice: {
            item: {
              id: Math.random().toString(),
              hourlyPay: 0,
              description: "hi",
              startsAt: "hi",
              workhour: 0,
              closed: false,
            },
            href: "hi",
          },
          links: [{}],
        },
      },
    ],
    links: [
      {
        rel: "self",
        description: "현재 페이지",
        method: "GET",
        href: "hi",
      },
      {
        rel: "prev",
        description: "이전 페이지",
        method: "GET",
        href: "hi",
      },
      {
        rel: "next",
        description: "다음 페이지",
        method: "GET",
        href: "hi",
      },
      {
        rel: "user",
        description: "사용자 정보",
        method: "GET",
        href: "hi",
      },
    ],
  };
};
