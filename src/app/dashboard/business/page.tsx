import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define a type for the status prop
interface OrderListProps {
  status: 'Pending' | 'Accepted' | 'Completed' | 'Rejected';
}

interface Order {
  id: number;
  customerName: string;
  orderDetails: string;
  total: string;
}

export default function BusinessDashboard() {
  return (
    <div className="p-4">
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Orders</TabsTrigger>
          <TabsTrigger value="accepted">Accepted Orders</TabsTrigger>
          <TabsTrigger value="completed">Completed Orders</TabsTrigger>
          <TabsTrigger value="rejected">Rejected Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <OrderList status="Pending" />
        </TabsContent>
        <TabsContent value="accepted">
          <OrderList status="Accepted" />
        </TabsContent>
        <TabsContent value="completed">
          <OrderList status="Completed" />
        </TabsContent>
        <TabsContent value="rejected">
          <OrderList status="Rejected" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function OrderList({ status }: OrderListProps) {
  // This function should fetch and render a list of orders based on the status.
  const orders: Order[] = [
    // Sample data, replace with actual data fetching logic
    { id: 1, customerName: 'John Doe', orderDetails: '2x Pizza, 1x Coke', total: '$25.00' },
    { id: 2, customerName: 'Jane Smith', orderDetails: '1x Burger, 1x Fries', total: '$15.00' },
  ];

  return (
    <ScrollArea className="h-[400px] mt-4">
      {orders.map(order => (
        <Card key={order.id} className="mb-4">
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
            <CardDescription>{order.customerName}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{order.orderDetails}</p>
            <p>Total: {order.total}</p>
          </CardContent>
          <Button className="mt-2">View Details</Button>
        </Card>
      ))}
    </ScrollArea>
  );
}
