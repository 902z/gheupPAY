export type ShopData = {
  shopDetail: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
      user: {
        item: {
          id: string;
          email: string;
          type: string;
        };
        href: string;
      };
    };
  };
};

export type noticeDetail = {
  noticeDetail: {
    item: {
      id: number;
      hourlyPay: number;
      startsAt: string;
      workhour: number;
      description: string;
      closed: false;
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
    };
  };
};

export type ApplicationItem = {
  item: {
    id: string;
    status: string;
    createdAt: string;
    user: {
      id: string;
      email: string;
      type: string;
      name?: string;
      phone?: string;
      address?: string;
      bio?: string;
    };
    shop: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
      href: string;
    };
    notice: {
      id: string;
      hourlyPay: number;
      description: string;
      startsAt: string;
      workhour: number;
      closed: boolean;
      href: string;
    };
    links: {
      rel: string;
      description: string;
      method: string;
      href: string;
      body?: {
        status: "accepted" | "rejected";
      };
    }[];
  };
};

export type Application = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: ApplicationItem[];
};
