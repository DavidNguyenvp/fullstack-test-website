
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import {
  ArrowBreadcrumbs,
  BreadcrumbsContainer,
} from "./BreadcrumbsBar.styles";
import Crumb from "./Crumb";
import { splitPathIntoSubPaths } from "@/utils/common";

export interface IBreadcrumb {
  href: string;
  text: string;
}

const BreadcrumbsBar = () => {
  const { t } = useTranslation(["common"]);
  const router = useRouter();

  const breadcrumbs: IBreadcrumb[] = useMemo(() => {
    // Split path into an array of actual path values
    const asPathRoutes: string[] = splitPathIntoSubPaths(router.asPath);

    const generateText = (subpath: string): string => {
      return subpath.replace(/-./g, (x) => x[1].toUpperCase());
    };

    // Create a list of crumbs
    const crumbsList: IBreadcrumb[] = asPathRoutes.map((subpath, index) => {
      const href = "/" + asPathRoutes.slice(0, index + 1).join("/");
      const text = generateText(subpath);

      const crumb: IBreadcrumb = { href, text };
      return crumb;
    });

    // Return a list of crumbs objects and a home route object
    return [ ...crumbsList];
  }, [router.asPath, t]);

  return (
    <BreadcrumbsContainer elevation={9}>
      <ArrowBreadcrumbs aria-label="breadcrumb" maxItems={5} separator="›">
        {breadcrumbs.map((crumb, index) => (
          <Crumb
            key={index}
            href={crumb.href}
            text={crumb.text}
            last={index === breadcrumbs.length - 1}
          />
        ))}
      </ArrowBreadcrumbs>
    </BreadcrumbsContainer>
  );
};

export default React.memo(BreadcrumbsBar);
