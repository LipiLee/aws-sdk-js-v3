import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateNetworkInterfacePermissionCommand,
  serializeAws_ec2CreateNetworkInterfacePermissionCommand,
} from "../protocols/Aws_ec2";
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

export interface CreateNetworkInterfacePermissionCommandInput extends CreateNetworkInterfacePermissionRequest {}
export interface CreateNetworkInterfacePermissionCommandOutput
  extends CreateNetworkInterfacePermissionResult,
    __MetadataBearer {}

/**
 * <p>Grants an AWS-authorized account permission to attach the specified network interface to
 *             an instance in their account.</p>
 * 		       <p>You can grant permission to a single AWS account only, and only one account at a time.</p>
 */
export class CreateNetworkInterfacePermissionCommand extends $Command<
  CreateNetworkInterfacePermissionCommandInput,
  CreateNetworkInterfacePermissionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNetworkInterfacePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInterfacePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkInterfacePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkInterfacePermissionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateNetworkInterfacePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNetworkInterfacePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkInterfacePermissionCommandOutput> {
    return deserializeAws_ec2CreateNetworkInterfacePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
