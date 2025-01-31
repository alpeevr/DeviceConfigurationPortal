import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "preact/hooks";

export function App() {
  const [deviceName, setDeviceName] = useState("Slave One");
  const [isSaving, setIsSaving] = useState(false);
  const handleInputChange = (event) => {
    setDeviceName(event.target.value);
  };
  const handleSaveClick = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };
  return (
    <Card className="w-full max-w-md shadow-lg mx-auto">
      <CardHeader className="pb-0">
        <CardTitle>Pointing Devices Controller</CardTitle>
        <CardDescription>Configure your device settings</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {isSaving ? (
          <div
            id="saving-animation"
            className="flex items-center justify-center py-12"
          >
            <div className="h-8 w-8 animate-spin">
              <RocketIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-lg font-medium">
              Saving & <br /> Relaunching…
            </span>
          </div>
        ) : (
          <>
            <Alert className="mb-4 mt-0">
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>Get Ready For Launch!</AlertTitle>
              <AlertDescription>
                Just enter connection data for you WiFi and DATARAMA server and
                restart the device
              </AlertDescription>
            </Alert>
            <div className="grid gap-2">
              <Label htmlFor="wifi-ssid">WiFi SSID</Label>
              <Input id="wifi-ssid" placeholder="Enter WiFi SSID" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wifi-password">WiFi Password</Label>
              <Input
                id="wifi-password"
                type="password"
                placeholder="Enter WiFi Password"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wifi-password-confirm">
                Confirm WiFi Password
              </Label>
              <Input
                id="wifi-password-confirm"
                type="password"
                placeholder="Confirm WiFi Password"
              />
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
              <Label htmlFor="device-name">Device Name</Label>
              <Input
                id="device-name"
                value={deviceName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="auth-endpoint">Authentication Endpoint</Label>
              <Input id="auth-endpoint" placeholder="https://datarama.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ws-endpoint">Websockets Endpoint</Label>
              <Input id="ws-endpoint" placeholder="wss://datarama.com/socket" />
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Label>SSL Certificate</Label>
                </AccordionTrigger>
                <AccordionContent>
                  <Textarea
                    className="w-full rounded-md border border-input bg-background p-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    rows={5}
                    placeholder="Copy & Paste SSL Certificate here:"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSaveClick}>
          Save to Device and Restart
        </Button>
      </CardFooter>
    </Card>
  );
}

function RocketIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  );
}
