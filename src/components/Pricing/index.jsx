import React from 'react';
import {
  PricingSection,
  PricingWrapper,
  PricingText,
  PricingTitle,
  ResponsiveTable,
  Table,
  TableHeader,
  TableCell,
  TableLink,
} from './styles';

const Pricing = () => {
  return (
    <PricingSection id="pricing">
      <PricingWrapper>
        <div className="pricing">
          <PricingText>
            <PricingTitle>PRICING</PricingTitle>
          </PricingText>
          <ResponsiveTable>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Revenue Source</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Price</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableCell>Photography Services</TableCell>
                  <TableCell>
                    We offer specialized photography services for
                    videogame-related events, charging for photo sessions, event
                    coverage, and customized packages.
                  </TableCell>
                  <TableCell>$100 - $400</TableCell>
                </tr>
                <tr>
                  <TableCell>Print Sales</TableCell>
                  <TableCell>
                    We print and sell our best videogame photographs as artwork
                    in the form of posters, frames, or canvas prints for avid
                    videogame fans.
                  </TableCell>
                  <TableCell>$10 - $40</TableCell>
                </tr>
                <tr>
                  <TableCell>Image Licensing</TableCell>
                  <TableCell>
                    Videogame photographs can be licensed for use in media such
                    as specialized magazines, websites, blogs, books, and
                    promotional materials.
                  </TableCell>
                  <TableCell>Starting from $100</TableCell>
                </tr>
                <tr>
                  <TableCell>Online Content Creation</TableCell>
                  <TableCell>
                    We utilize videogame photographs to create online content
                    such as blogs and websites, where we share photography tips,
                    tutorials, game reviews, and interviews with game
                    developers.
                  </TableCell>
                  <TableCell>
                    Free or premium subscriptions, here is{' '}
                    <TableLink href="#">our channel</TableLink>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>Related Product Sales</TableCell>
                  <TableCell>
                    We sell photography and videogame-related products, such as
                    t-shirts, mugs, mouse pads, phone cases, and other
                    customized items, featuring our exclusive photographic
                    images.
                  </TableCell>
                  <TableCell>$20 - $100</TableCell>
                </tr>
              </tbody>
            </Table>
          </ResponsiveTable>
        </div>
      </PricingWrapper>
    </PricingSection>
  );
};

export default Pricing;
