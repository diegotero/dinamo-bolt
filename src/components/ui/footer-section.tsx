"use client"

    import * as React from "react"
    import { Button } from "./button"
    import { Input } from "./input"
    import { Label } from "./label"
    import {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
    } from "./tooltip"
    import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

    function Footerdemo() {
      return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
          <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Mantente Conectado</h2>
                <p className="mb-6 text-muted-foreground">
                  Sumate a nuestro newsletter para recibir las últimas novedades y ofertas exclusivas.
                </p>
                <form className="relative">
                  <Input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="pr-12 backdrop-blur-sm"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Suscribirse</span>
                  </Button>
                </form>
                <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Links Útiles</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block transition-colors hover:text-primary">
                    Inicio
                  </a>
                  <a href="#" className="block transition-colors hover:text-primary">
                    Sobre Nosotros
                  </a>
                  <a href="#" className="block transition-colors hover:text-primary">
                    Servicios
                  </a>
                   <a href="#" className="block transition-colors hover:text-primary">
                    Contacto
                  </a>
                </nav>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contactanos</h3>
                <address className="space-y-2 text-sm not-italic">
                  <p>Saturnino Navarro 4274</p>
                  <p>Córdoba, Argentina</p>
                  <p>Teléfono: 3516763950</p>
                  <p>Email: info@dinamo.net.ar</p>
                </address>
              </div>
              <div className="relative">
                <h3 className="mb-4 text-lg font-semibold">Seguinos</h3>
                <div className="mb-6 flex space-x-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Facebook className="h-4 w-4" />
                          <span className="sr-only">Facebook</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Seguinos en Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Seguinos en Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Seguinos en Instagram</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Conectate con nosotros en LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
              <p className="text-sm text-muted-foreground">
                © 2024 Dinamo. Todos los derechos reservados.
              </p>
              <nav className="flex gap-4 text-sm">
                <a href="#" className="transition-colors hover:text-primary">
                  Política de Privacidad
                </a>
                <a href="#" className="transition-colors hover:text-primary">
                  Términos de Servicio
                </a>
                <a href="#" className="transition-colors hover:text-primary">
                  Configuración de Cookies
                </a>
              </nav>
            </div>
          </div>
        </footer>
      )
    }

    export { Footerdemo }
