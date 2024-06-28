type DataType = {
  offset: number;
  limit: number;
  count: number; // 전체 개수
  hasNext: boolean; // 다음 내용 존재 여부
  items: {
    item: {
      id: string;
      createdAt: string;
      result: "accepted" | "rejected";
      read: boolean;
      application: {
        item: {
          id: string;
          status: "pending" | "accepted" | "rejected";
        };
        href: string;
      };
      shop: {
        item: {
          id: string;
          name: string;
          category: string;
          address1: string;
          address2: string;
          description: string;
          imageUrl: string;
          originalHourlyPay: number;
        };
        href: string;
      };
      notice: {
        item: {
          id: string;
          hourlyPay: number;
          description: string;
          startsAt: string;
          workhour: number;
          closed: boolean;
        };
        href: string;
      };
    };
  }[];
};

export const DATA: DataType = {
  offset: 0,
  limit: 11,
  count: 11, // 전체 개수
  hasNext: false, // 다음 내용 존재 여부
  items: [
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "HS 과일주스",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
    {
      item: {
        id: "id",
        createdAt: "날짜",
        result: "accepted",
        read: true,
        application: {
          item: {
            id: "string",
            status: "rejected",
          },
          href: "string",
        },
        shop: {
          item: {
            id: "string",
            name: "string",
            category: "string",
            address1: "string",
            address2: "string",
            description: "string",
            imageUrl: "string",
            originalHourlyPay: 10,
          },
          href: "string",
        },
        notice: {
          item: {
            id: "string",
            hourlyPay: 10,
            description: "string",
            startsAt: "string",
            workhour: 5,
            closed: true,
          },
          href: "string",
        },
      },
    },
  ],
};
