import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  ListWebsiteCertificateAuthoritiesRequest,
  ListWebsiteCertificateAuthoritiesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand,
  serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListWebsiteCertificateAuthoritiesCommandInput extends ListWebsiteCertificateAuthoritiesRequest {}
export interface ListWebsiteCertificateAuthoritiesCommandOutput
  extends ListWebsiteCertificateAuthoritiesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of certificate authorities added for the current account and
 *             Region.</p>
 */
export class ListWebsiteCertificateAuthoritiesCommand extends $Command<
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWebsiteCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "ListWebsiteCertificateAuthoritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWebsiteCertificateAuthoritiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListWebsiteCertificateAuthoritiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> {
    return deserializeAws_restJson1ListWebsiteCertificateAuthoritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
